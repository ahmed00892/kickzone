function Background({ content }) {
  return (
    <div className="relative h-screen flex items-center justify-center bg-home bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50"></div>
      {content}
    </div>
  );
}

export default Background;
