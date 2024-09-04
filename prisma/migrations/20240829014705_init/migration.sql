/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - Added the required column `idRole` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
ADD COLUMN     "idRole" INTEGER NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "Role" (
    "idRole" SERIAL NOT NULL,
    "nameRole" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("idRole")
);

-- CreateTable
CREATE TABLE "RolePermissions" (
    "idRolePermissions" SERIAL NOT NULL,
    "idRole" INTEGER NOT NULL,
    "idPermissions" INTEGER NOT NULL,
    "idPrivileges" INTEGER NOT NULL,

    CONSTRAINT "RolePermissions_pkey" PRIMARY KEY ("idRolePermissions")
);

-- CreateTable
CREATE TABLE "Permissions" (
    "idPermissions" SERIAL NOT NULL,
    "namePermission" TEXT NOT NULL,

    CONSTRAINT "Permissions_pkey" PRIMARY KEY ("idPermissions")
);

-- CreateTable
CREATE TABLE "Privileges" (
    "idPrivileges" SERIAL NOT NULL,
    "namePrivileges" TEXT NOT NULL,

    CONSTRAINT "Privileges_pkey" PRIMARY KEY ("idPrivileges")
);

-- CreateTable
CREATE TABLE "Client" (
    "idClient" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("idClient")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "idAppointments" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "information" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("idAppointments")
);

-- CreateTable
CREATE TABLE "Adoptions" (
    "idAdoption" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idPets" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "monitoringStatus" TEXT NOT NULL,

    CONSTRAINT "Adoptions_pkey" PRIMARY KEY ("idAdoption")
);

-- CreateTable
CREATE TABLE "Pets" (
    "idPets" SERIAL NOT NULL,
    "namePet" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "breed" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("idPets")
);

-- CreateTable
CREATE TABLE "ShoppingCart" (
    "idShoppingCart" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "idUser" INTEGER,
    "quantityProduct" INTEGER NOT NULL,
    "numberId" TEXT NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("idShoppingCart")
);

-- CreateTable
CREATE TABLE "ShoppingCartProducts" (
    "idShoppingCartProd" SERIAL NOT NULL,
    "idShoppingCart" INTEGER NOT NULL,
    "idProduct" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ShoppingCartProducts_pkey" PRIMARY KEY ("idShoppingCartProd")
);

-- CreateTable
CREATE TABLE "Products" (
    "idProduct" SERIAL NOT NULL,
    "nameProduct" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("idProduct")
);

-- CreateTable
CREATE TABLE "Payments" (
    "idPayments" SERIAL NOT NULL,
    "idShoppingCart" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("idPayments")
);

-- CreateTable
CREATE TABLE "Shipping" (
    "idShipping" SERIAL NOT NULL,
    "idClient" INTEGER NOT NULL,
    "idShoppingCart" INTEGER NOT NULL,
    "enterpriseShipping" TEXT NOT NULL,
    "guide" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Shipping_pkey" PRIMARY KEY ("idShipping")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_idRole_fkey" FOREIGN KEY ("idRole") REFERENCES "Role"("idRole") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_idPermissions_fkey" FOREIGN KEY ("idPermissions") REFERENCES "Permissions"("idPermissions") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolePermissions" ADD CONSTRAINT "RolePermissions_idPrivileges_fkey" FOREIGN KEY ("idPrivileges") REFERENCES "Privileges"("idPrivileges") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoptions" ADD CONSTRAINT "Adoptions_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Adoptions" ADD CONSTRAINT "Adoptions_idPets_fkey" FOREIGN KEY ("idPets") REFERENCES "Pets"("idPets") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCart" ADD CONSTRAINT "ShoppingCart_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("idClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCart" ADD CONSTRAINT "ShoppingCart_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("idUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCartProducts" ADD CONSTRAINT "ShoppingCartProducts_idShoppingCart_fkey" FOREIGN KEY ("idShoppingCart") REFERENCES "ShoppingCart"("idShoppingCart") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCartProducts" ADD CONSTRAINT "ShoppingCartProducts_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Products"("idProduct") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_idShoppingCart_fkey" FOREIGN KEY ("idShoppingCart") REFERENCES "ShoppingCart"("idShoppingCart") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client"("idClient") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_idShoppingCart_fkey" FOREIGN KEY ("idShoppingCart") REFERENCES "ShoppingCart"("idShoppingCart") ON DELETE RESTRICT ON UPDATE CASCADE;
