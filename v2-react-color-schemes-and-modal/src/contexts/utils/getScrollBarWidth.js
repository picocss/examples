const getScrollBarWidth = () => {
  const isSSR = typeof window === "undefined";
  if (isSSR) return 0;
  const hasScrollbar = document.body.scrollHeight > screen.height;
  if (hasScrollbar) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  }
  return 0;
};

export default getScrollBarWidth;
