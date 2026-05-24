import { notFound } from "next/navigation";
import { CategoryLessonList } from "@/components/CategoryLessonList";
import { getCategoryLessons, getTrainingCategory, trainingCategories } from "@/data/trainingCategories";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export function generateStaticParams() {
  return trainingCategories.map((category) => ({ category: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getTrainingCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const lessons = getCategoryLessons(category);

  return <CategoryLessonList category={category} lessons={lessons} />;
}
