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
    "deliveryDate" DATETIME NOT NULL,
    "delliveryPlacement" TEXT NOT NULL,
    "company" TEXT NOT NULL
);
INSERT INTO "new_Form" ("address", "city", "company", "createdAt", "deliveryDate", "delliveryPlacement", "email", "fName", "id", "lName", "phone") SELECT "address", "city", "company", "createdAt", "deliveryDate", "delliveryPlacement", "email", "fName", "id", "lName", "phone" FROM "Form";
DROP TABLE "Form";
ALTER TABLE "new_Form" RENAME TO "Form";
CREATE UNIQUE INDEX "Form_email_key" ON "Form"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
