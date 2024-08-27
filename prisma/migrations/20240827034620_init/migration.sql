-- CreateTable
CREATE TABLE "User" (
    "idUser" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "typeDocument" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("idUser")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_document_key" ON "User"("document");
