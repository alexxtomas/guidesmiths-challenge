const Loading = (): JSX.Element => (
  <div className="loading" data-testid="loading">
    <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
      <circle cx="50" cy="50" r="20" />
    </svg>
  </div>
)

export default Loading
