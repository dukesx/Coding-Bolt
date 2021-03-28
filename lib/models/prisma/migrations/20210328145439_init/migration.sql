-- CreateTable
CREATE TABLE "Articles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "excerpt" TEXT NOT NULL,
    "permalink" TEXT NOT NULL,
    "rand_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "rand_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticlesandUsers" (
    "user_id" UUID NOT NULL,
    "article_id" UUID NOT NULL,

    PRIMARY KEY ("user_id","article_id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesandArticles" (
    "articles_id" UUID NOT NULL,
    "category_id" UUID NOT NULL,

    PRIMARY KEY ("articles_id","category_id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticlesandTags" (
    "article_id" UUID NOT NULL,
    "tag_id" UUID NOT NULL,

    PRIMARY KEY ("article_id","tag_id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "content" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentstoAuthorstoArticles" (
    "user_id" UUID NOT NULL,
    "comment_id" UUID NOT NULL,
    "article_id" UUID NOT NULL,

    PRIMARY KEY ("user_id","article_id","comment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Articles.title_unique" ON "Articles"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Articles.rand_id_unique" ON "Articles"("rand_id");

-- CreateIndex
CREATE UNIQUE INDEX "Users.username_unique" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users.rand_id_unique" ON "Users"("rand_id");

-- CreateIndex
CREATE UNIQUE INDEX "Categories.title_unique" ON "Categories"("title");

-- AddForeignKey
ALTER TABLE "ArticlesandUsers" ADD FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticlesandUsers" ADD FOREIGN KEY ("article_id") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesandArticles" ADD FOREIGN KEY ("articles_id") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesandArticles" ADD FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticlesandTags" ADD FOREIGN KEY ("article_id") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArticlesandTags" ADD FOREIGN KEY ("tag_id") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentstoAuthorstoArticles" ADD FOREIGN KEY ("comment_id") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentstoAuthorstoArticles" ADD FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentstoAuthorstoArticles" ADD FOREIGN KEY ("article_id") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
