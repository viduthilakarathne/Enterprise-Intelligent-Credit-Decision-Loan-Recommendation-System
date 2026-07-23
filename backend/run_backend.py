"""
One-Click Backend Automated Launcher
Generates synthetic data, trains ML model, and starts FastAPI server.
"""

import sys
import os
import subprocess

def main():
    backend_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(backend_dir)
    print(f"Working Directory: {os.getcwd()}")

    # 1. Generate Dataset & Train Model
    print("\n[Step 1/2] Generating Synthetic Banking Data & Exporting Model Schema...")
    from generate_data import generate_banking_dataset
    from train_model import train_and_export

    generate_banking_dataset(n_samples=5000)
    train_and_export()

    # 2. Launch FastAPI Server
    print("\n[Step 2/2] Starting FastAPI REST API Service on http://127.0.0.1:8000...")
    import uvicorn
    from app import app
    uvicorn.run(app, host="127.0.0.1", port=8000)

if __name__ == '__main__':
    main()
