import StateSkeleton from "@/components/StateSkeleton";
import { DEFAULT_NOT_FOUND } from "@/constants/notFound";

interface NotFoundProps {
  page?: {
    title: string;
    message: string;
    button?: {
      text: string;
      href: string;
    };
  };
}

const NotFoundRenderer = ({ page = DEFAULT_NOT_FOUND }: NotFoundProps) => {
  return (
    <StateSkeleton
      image={{
        light: "/images/light-illustration.png",
        dark: "/images/dark-illustration.png",
        alt: "Not found illustration",
      }}
      title={page.title}
      message={page.message}
      button={page.button}
    />
  );
};

export default NotFoundRenderer;
