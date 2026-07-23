"""
Synthetic Enterprise Banking Data Generator
Generates realistic customer financial profiles for loan scheme recommendation model training.
"""

import os
import random
import pandas as pd
import numpy as np

def generate_banking_dataset(n_samples=5000, seed=42):
    np.random.seed(seed)
    random.seed(seed)

    print(f"Generating {n_samples} synthetic customer banking records...")

    customer_ids = [f"CUST-{10000 + i}" for i in range(n_samples)]
    ages = np.random.randint(21, 68, size=n_samples)
    
    # Employment & Branch categories
    employment_types = ['Salaried-Corporate', 'Salaried-Govt', 'Self-Employed-Business', 'Self-Employed-Professional', 'Gig-Worker']
    employment_weights = [0.4, 0.2, 0.2, 0.15, 0.05]
    emp_choices = np.random.choice(employment_types, size=n_samples, p=employment_weights)

    branch_categories = ['Tier-1-Metro', 'Tier-2-Urban', 'Tier-3-SemiUrban', 'Rural']
    branch_choices = np.random.choice(branch_categories, size=n_samples, p=[0.45, 0.3, 0.18, 0.07])

    # Monthly salaries ($2,000 to $25,000)
    salaries = np.round(np.random.lognormal(mean=9.1, sigma=0.6, size=n_samples), -2)
    salaries = np.clip(salaries, 1800, 35000)

    # Credit scores (300 to 850)
    credit_scores = np.round(np.random.normal(loc=710, scale=75, size=n_samples)).astype(int)
    credit_scores = np.clip(credit_scores, 320, 850)

    # Savings & Deposits
    savings_balances = np.round(salaries * np.random.uniform(0.5, 8.0, size=n_samples), -2)

    # Debt-to-income (DTI) ratio
    dti_ratios = np.round(np.random.uniform(8, 55, size=n_samples), 1)

    # Existing active loans
    existing_loans_count = np.random.choice([0, 1, 2, 3, 4], size=n_samples, p=[0.35, 0.4, 0.18, 0.05, 0.02])

    # Monthly expenses
    monthly_expenses = np.round(salaries * (dti_ratios / 100) + np.random.uniform(200, 800, size=n_samples), -2)

    # Customer Risk Score (1-100)
    risk_scores = np.round(
        (100 - (credit_scores / 8.5)) + (dti_ratios * 0.6) + (existing_loans_count * 4) - (savings_balances / 10000)
    )
    risk_scores = np.clip(risk_scores, 5, 95).astype(int)

    # Target Label: Top Recommended Loan Scheme
    # 0: Super-Prime Privilege Loan (Low EMI, High Limit)
    # 1: Enterprise Preferred Express Loan
    # 2: Standard Credit Builder Loan
    # 3: Guaranteed Secured Loan
    target_schemes = []
    for i in range(n_samples):
        cs = credit_scores[i]
        dti = dti_ratios[i]
        sal = salaries[i]
        risk = risk_scores[i]

        if cs >= 750 and dti <= 35 and sal >= 6000 and risk < 35:
            target_schemes.append('Super-Prime Privilege Loan')
        elif cs >= 680 and dti <= 45 and sal >= 3500 and risk < 55:
            target_schemes.append('Enterprise Preferred Express Loan')
        elif cs >= 600 and dti <= 50 and risk < 75:
            target_schemes.append('Standard Credit Builder Loan')
        else:
            target_schemes.append('Guaranteed Secured Loan')

    df = pd.DataFrame({
        'customer_id': customer_ids,
        'customer_age': ages,
        'employment_type': emp_choices,
        'branch_category': branch_choices,
        'monthly_salary': salaries,
        'credit_score': credit_scores,
        'savings_balance': savings_balances,
        'dti_ratio': dti_ratios,
        'existing_loans': existing_loans_count,
        'monthly_expenses': monthly_expenses,
        'customer_risk_score': risk_scores,
        'recommended_loan_scheme': target_schemes
    })

    os.makedirs('data', exist_ok=True)
    csv_path = os.path.join('data', 'customers.csv')
    df.to_csv(csv_path, index=False)
    print(f"Dataset successfully created at '{csv_path}' with shape {df.shape}!")
    return df

if __name__ == '__main__':
    generate_banking_dataset()
