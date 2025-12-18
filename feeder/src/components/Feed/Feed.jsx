const Feed = () => {
  const feedCat = async () => {
    await fetch("http://localhost:3001/feed", {
      method: "POST",
    });
    alert("Cat fed 🐱");
  };

  return <button onClick={feedCat}>Feed</button>;
};

export default Feed;
