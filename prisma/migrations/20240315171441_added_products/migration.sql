-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    UNIQUE INDEX `Product_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
