```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Using console.error ensures the message is displayed, even with optimizations.
    console.error('Mounted!');
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```