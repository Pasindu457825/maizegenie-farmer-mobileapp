# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="MaizeGenie API")

# ✅ Add CORS middleware here
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],        # allow all origins for now (Expo app, localhost, LAN IP)
    allow_credentials=True,
    allow_methods=["*"],        # allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],        # allow all headers (Authorization, Content-Type, etc.)
)

class HealthResp(BaseModel):
    ok: bool

@app.get("/health", response_model=HealthResp)
def health():
    return {"ok": True}
