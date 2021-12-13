/*
  Warnings:

  - You are about to drop the column `productId` on the `Color` table. All the data in the column will be lost.
  - Added the required column `colors` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Color` DROP FOREIGN KEY `Color_productId_fkey`;

-- AlterTable
ALTER TABLE `Color` DROP COLUMN `productId`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `colors` INTEGER NOT NULL;
