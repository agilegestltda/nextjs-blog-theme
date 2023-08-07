export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'AgileGest Tecnologia';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Esse domínio foi comprado e registrado por BRUNO DA SILVA FREITAS';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Todos os direitos reservados.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
