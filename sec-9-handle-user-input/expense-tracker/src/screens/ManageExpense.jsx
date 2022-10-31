import {StyleSheet, View} from "react-native";
import React from "react";
import IconButton from "../components/common/IconButton";
import {GlobalStyles} from "../constants/styles";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, deleteExpense, updateExpense} from "../store/expenses";
import ExpenseForm from "../components/manage-expense/ExpenseForm";

const ManageExpense = ({route, navigation}) => {
  const dispatch = useDispatch();

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const selectedExpense = useSelector((state) => state.expenses.expenses.find((expense) => {
    return expense.id === editedExpenseId
  }));

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    dispatch(deleteExpense({id: editedExpenseId}));
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      dispatch(
          updateExpense({
            id: editedExpenseId,
            data: expenseData
          })
      )
    } else {
      dispatch(addExpense(expenseData))
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
          submitBtnLabel={isEditing ? "Update" : "Add"}
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          defaultExpense={selectedExpense}
      />

      {isEditing && (
        <View style={styles.trashContainer}>
          <IconButton
              name="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  trashContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  }
});
