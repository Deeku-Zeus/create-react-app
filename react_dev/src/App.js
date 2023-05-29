import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h1>My Expenses</h1>
      <ExpenseItem itemcount="1"></ExpenseItem>
      <ExpenseItem itemcount="4"></ExpenseItem>
      <ExpenseItem itemcount="2"></ExpenseItem>
      <ExpenseItem itemcount="5"></ExpenseItem>
      <ExpenseItem itemcount="3"></ExpenseItem>
    </div>
  );
}

export default App;
