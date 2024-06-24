/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `Quote` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Quote` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Quote_email_key";

-- AlterTable
ALTER TABLE "Quote" DROP COLUMN "phoneNumber",
ADD COLUMN     "phone" TEXT NOT NULL;
