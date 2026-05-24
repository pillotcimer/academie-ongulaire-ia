import { notFound } from "next/navigation";
import { StepByStepLesson } from "@/components/StepByStepLesson";
import {
  getLessonInCategory,
  getNextLessonInCategory,
  getTrainingCategory,
  trainingCategories
} from "@/data/trainingCategories";

type LessonPageProps = {
  params: Promise<{
    category: string;
    lessonId: string;
  }>;
  searchParams?: Promise<{
    etape?: string;
  }>;
};

export function generateStaticParams() {
  return trainingCategories.flatMap((category) =>
    category.lessonIds.map((lessonId) => ({
      category: category.slug,
      lessonId
    }))
  );
}

export default async function LessonPage({ params, searchParams }: LessonPageProps) {
  const { category: categorySlug, lessonId } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const result = getLessonInCategory(categorySlug, lessonId);

  if (!result) {
    notFound();
  }

  const category = getTrainingCategory(categorySlug);

  if (!category) {
    notFound();
  }

  const nextLesson = getNextLessonInCategory(category, lessonId);
  const requestedStep = Number(resolvedSearchParams.etape ?? "1");
  const activeStepIndex = Number.isFinite(requestedStep) ? Math.min(Math.max(requestedStep - 1, 0), 6) : 0;

  return (
    <StepByStepLesson
      category={category}
      lesson={result.lesson}
      activeStepIndex={activeStepIndex}
      nextLessonHref={nextLesson ? `/formation/${category.slug}/${nextLesson.id}` : undefined}
      nextLessonTitle={nextLesson?.title}
    />
  );
}
