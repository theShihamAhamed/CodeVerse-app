import NotFoundRenderer from "@/components/NotFoundRenderer";
import { QUESTION_NOT_FOUND } from "@/constants/notFound";

export default function NotFound() {
  return <NotFoundRenderer page={QUESTION_NOT_FOUND} />;
}
