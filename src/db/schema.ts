import { integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const linksTable = pgTable('links', {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	link_id: varchar({ length: 7 }).notNull(),
	link_url: text().notNull(),
	view_count: integer().default(0).notNull(),
	last_viewed: timestamp().$onUpdate(() => new Date()),
	created_at: timestamp().defaultNow(),
});
