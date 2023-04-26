import React from 'react'
import ExpensesCard from '../expensesCard/ExpensesCard'
import Chart from '../Chart/Chart'
import { useState } from 'react'
import Button from '../UI/button/Button'
import styled from 'styled-components'

const Expenses = ({ newExpense }) => {
  const [selectedYear, setSelectedYear] = useState('2023')
  const [sortExpense, setSortExpense] = useState(false)

  const dropdownChangeHandler = (event) => {
    setSelectedYear(event.target.value)
  }

  const filteredYear = newExpense.filter((el) => {
    // const fullYear = el.date.getFullYear().toString()
    return  selectedYear
  })

  const descendingHandler = () => {
    setSortExpense(true)
  }

  const ascendingHandler = () => {
    setSortExpense(false)
  }

  let descending

  let ascending

  if (sortExpense) {
    descending = filteredYear.sort((a, b) => a.date - b.date)
  } else {
    ascending = filteredYear.sort((a, b) => b.date - a.date)
  }

  const styleBtnDes = sortExpense ? '#4a026b' : '#fff'
  const styleBtnAsc = sortExpense ? '#fff' : '#4a026b'

  return (
    <ExpensesStyled>
      <Filter>
        <FilterDate>
          <Button
            bgColor={`${styleBtnAsc}`}
            color={`${styleBtnDes}`}
            hoverBgColor={styleBtnAsc}
            brRadius="10px 10px 0px 0px"
            onClick={ascendingHandler}
          >
            По Возрастанию
          </Button>
          <Button
            bgColor={`${styleBtnDes}`}
            color={`${styleBtnAsc}`}
            brRadius="10px 10px 0px 0px"
            hoverBgColor={styleBtnDes}
            onClick={descendingHandler}
          >
            По Убыванию
          </Button>
        </FilterDate>

        <Select value={selectedYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
      </Filter>
      <div>
        <Chart filteredYear={filteredYear} />
      </div>
      <div>
        {sortExpense
          ? descending.map((el) => <ExpensesCard key={el.id} el={el} />)
          : ascending.map((el) => <ExpensesCard key={el.id} el={el} />)}
      </div>
    </ExpensesStyled>
  )
}

export default Expenses

const ExpensesStyled = styled.div`
  background-color: #1f1f1f;
  border-radius: 12px;
  padding: 28px 16px;
  margin-top: 28px;
  margin-bottom: 60px;
  width: 780px;
  margin-left:25%;
`

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
`

const FilterDate = styled.div`
  display: flex;
  gap: 20px;
`

const Select = styled.select`
  padding: 13px 12px 14px 12px;
  background: #ffffff;
  border-radius: 6px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
`
