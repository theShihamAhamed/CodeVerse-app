import NotFoundRenderer from "@/components/NotFoundRenderer";
import { USER_NOT_FOUND } from "@/constants/notFound";

export default function NotFound() {
  return <NotFoundRenderer page={USER_NOT_FOUND} />;
}
