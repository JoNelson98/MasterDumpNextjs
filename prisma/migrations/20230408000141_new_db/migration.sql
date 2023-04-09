/*
  Warnings:

  - You are about to drop the column `fname` on the `Form` table. All the data in the column will be lost.
  - You are about to drop the column `lname` on the `Form` table. All the data in the column will be lost.
  - Added the required column `address` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delliveryPlacement` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fName` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lName` to the `Form` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Form` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Form" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fName" TEXT NOT NULL,
    "lName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "deliveryDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delliveryPlacement" TEXT NOT NULL,
    "company" TEXT NOT NULL
);
INSERT INTO "new_Form" ("createdAt", "id") SELECT "createdAt", "id" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
CREATE UNIQUE INDEX "Form_email_key" ON "Form"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
