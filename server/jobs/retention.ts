import { db } from '../db';
import { consentEvents } from '@shared/schema';
import { sql } from 'drizzle-orm';

/**
 * Delete consent events older than the specified number of days
 * Default: 2 years (730 days) to comply with GDPR recommendations
 */
export async function cleanupOldConsentEvents(retentionDays: number = 730): Promise<number> {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - retentionDays);
    
    const result = await db
      .delete(consentEvents)
      .where(sql`${consentEvents.createdAt} < ${cutoffDate}`)
      .returning({ id: consentEvents.id });
    
    console.log(`Deleted ${result.length} consent events older than ${retentionDays} days`);
    return result.length;
  } catch (error) {
    console.error('Failed to cleanup old consent events:', error);
    throw error;
  }
}

/**
 * Manual cleanup script - can be run via npm script or cron job
 */
if (require.main === module) {
  const retentionDays = parseInt(process.env.CONSENT_RETENTION_DAYS || '730', 10);
  
  cleanupOldConsentEvents(retentionDays)
    .then((deletedCount) => {
      console.log(`Cleanup completed. Deleted ${deletedCount} old consent records.`);
      process.exit(0);
    })
    .catch((error) => {
      console.error('Cleanup failed:', error);
      process.exit(1);
    });
}