-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clicks" (
    "clickType" TEXT NOT NULL,
    "logoClicks" INTEGER,

    CONSTRAINT "Clicks_pkey" PRIMARY KEY ("clickType")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
