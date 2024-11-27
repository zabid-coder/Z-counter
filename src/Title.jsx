export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit!!!{" "}
          <p>
            <b>Buy Pro</b>
          </p>
          for &gt;10
        </span>
      ) : (
        "Z Counter"
      )}
    </h1>
  );
}
