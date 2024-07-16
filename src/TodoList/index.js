function TodoList({children}) {
  return (
      <ul style={{padding: '0 10vw'}}>
        {children}
      </ul>
  );
}

export { TodoList };