-- CreateTable
CREATE TABLE "ReferralCounter" (
    "id" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReferralCounter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ReferralCounter_flag_key" ON "ReferralCounter"("flag");
