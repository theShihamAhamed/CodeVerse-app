import NotFoundRenderer from "@/components/NotFoundRenderer";
import { TAG_NOT_FOUND } from "@/constants/notFound";

export default function NotFound() {
  return <NotFoundRenderer page={TAG_NOT_FOUND} />;
}
