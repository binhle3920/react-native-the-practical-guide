import {FlatList} from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />
}

const ExpensesList = ({items}) => {
  return (
    <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem} />
  );
}

export default ExpensesList;
