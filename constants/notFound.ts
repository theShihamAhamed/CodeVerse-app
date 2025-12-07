import ROUTES from "./routes";

export const DEFAULT_NOT_FOUND = {
  title: "Page Not Found",
  message: "We couldn't find the page you're looking for.",
  button: {
    text: "Go Home",
    href: ROUTES.HOME,
  },
};

// Optional — specialized not found states
export const QUESTION_NOT_FOUND = {
  title: "Question Not Found",
  message: "The question you're looking for may have been deleted.",
  button: {
    text: "Browse Questions",
    href: ROUTES.HOME,
  },
};

export const USER_NOT_FOUND = {
  title: "User Not Found",
  message: "This user doesn’t exist or may have been removed.",
  button: {
    text: "Explore Users",
    href: ROUTES.COMMUNITY,
  },
};

export const TAG_NOT_FOUND = {
  title: "Tag Not Found",
  message: "The tag you're looking for doesn't exist.",
  button: {
    text: "Explore Tags",
    href: ROUTES.TAGS,
  },
};
