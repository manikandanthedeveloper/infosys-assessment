# Customer Rewards Dashboard

A React.js application that calculates and displays customer reward points based on purchase transactions over a three-month period.

---

## Features

- Calculate reward points based on purchase amount.
- Display monthly reward points per customer.
- Display total reward points per customer.
- Display all transactions with calculated reward points.
- Sort tables by customer, date, month, reward points, etc.
- Loading skeletons.
- Error handling with retry support.
- Empty state handling.
- Unit tests for business logic.
- Reusable custom hooks and utility functions.

---

## Reward Calculation

Reward points are calculated using the following rules:

| Purchase Amount | Reward Points |
|-----------------|--------------:|
| $0 - $50 | 0 |
| $50 - $100 | 1 point for every dollar over $50 |
| Above $100 | 2 points for every dollar over $100 + 50 points |

Example:

| Purchase | Reward |
|----------|-------:|
| $40 | 0 |
| $75 | 25 |
| $100 | 50 |
| $120 | 90 |
| $200 | 250 |

Decimal values are rounded down before calculating reward points.

Examples:

```
100.2 -> 50
100.8 -> 50
```

---

## Tech Stack

- React 18
- Vite
- JavaScript (ES6)
- Tailwind CSS
- Faker.js
- PropTypes

---

## Project Structure

```
src
│
├── assets
│
├── components
│   ├── common
│   ├── monthlyReward
│   ├── totalRewards
│   ├── transactions
│   ├── widgets
│
├── constants
│
├── data
│
├── hooks
│   ├── useSort.js
│   ├── useTransactions.js
│
├── services
│
├── utils
│   ├── dateFormatter.js
│   ├── rewardCalculator.js
│   ├── rewardAggregator.js
│
├── tests
│
└── App.jsx
```

---

## Application Architecture

```
Dashboard
      │
      ▼
useTransactions
      │
      ▼
fetchTransactions
      │
      ▼
rewardAggregator
      │
      ├─────────────┐
      ▼             ▼
 Widgets         Tables
```

Business logic is implemented using pure utility functions and separated from UI components.

---

## Sorting

Sorting is implemented using a reusable custom hook.

Supported sorting:

- Customer Name
- Customer Id
- Purchase Date
- Purchase Amount
- Reward Points
- Month / Year

Sorting uses comparator functions to correctly handle:

- Strings
- Numbers
- Dates
- Month + Year combinations

---

## Loading

The application displays skeleton loaders while transactions are being fetched.

---

## Error Handling

Gracefully handles API failures.

Features include:

- Error message
- Retry button
- Loading reset

---

## Empty State

Displays reusable empty-state components whenever no data is available.

---

## Unit Tests

Business logic is covered by unit tests.

Covered scenarios include:

- Reward calculation
- Date formatting
- Reward aggregation
- Monthly grouping
- Total rewards
- Statistics
- Decimal handling

---

## Installation

Clone the repository.

```bash
git clone <repository-url>
```

Install dependencies.

```bash
npm install
```

Start development server.

```bash
npm run dev
```

Run tests.

```bash
npm test
```

Build production bundle.

```bash
npm run build
```

Preview production build.

```bash
npm run preview
```

---

## Assumptions

- Reward points are calculated per transaction.
- Decimal purchase amounts are rounded down.
- Customer IDs are unique.
- Data is sorted chronologically.
- Transactions span three consecutive months.
- Rewards are aggregated by customer, month, and year.

---

## Future Improvements

- Server-side sorting
- Pagination
- Filtering
- Search
- Export to CSV
- REST API integration
- React Query
- Dark mode
- Accessibility enhancements

---

## Screenshots

### Dashboard

_Add screenshot here._

### Monthly Rewards

_Add screenshot here._

### Total Rewards

_Add screenshot here._

### Transactions

_Add screenshot here._

### Loading State

_Add screenshot here._

### Empty State

_Add screenshot here._

### Error State

_Add screenshot here._

---

## Author

Manikandan Dhanapal