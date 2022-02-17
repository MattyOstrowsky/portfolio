import motor.motor_asyncio
from models import Projects
from dotenv import load_dotenv

client = motor.motor_asyncio.AsyncIOMotorClient(os.getenv("MONGODB"))
db = client.portfolio
collection = db.projects


async def fetch_few_projects():
    proj = []
    cursor = collection.find({'id': {'$lt': 4}})
    async for document in cursor:
        proj.append(Projects(**document))
    return proj


async def fetch_all_projects():
    proj = []
    cursor = collection.find({})
    async for document in cursor:
        proj.append(Projects(**document))
    return proj
