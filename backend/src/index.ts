import express from 'express';
import {PrismaClient, Prisma, PolicyStatus} from '@prisma/client';
import cors from 'cors';

const app = express();
const port = 4000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json())

app.get('/policies', async (req, res) => {
  const {search: searchParameter, status: statusParameter} = req.query;

  const searchIs: Prisma.PolicyWhereInput = searchParameter
    ? {
      OR: [
        {provider: {contains: searchParameter as string, mode: 'insensitive'}},
        {customer: {firstName: {contains: searchParameter as string, mode: 'insensitive'}}},
        {customer: {lastName: {contains: searchParameter as string, mode: 'insensitive'}}}
      ],
    }
    : {};

  const policyStatusIs: Prisma.PolicyWhereInput = statusParameter
    ? {
      AND: {
        status: {
          in: (<string>statusParameter).split(',') as PolicyStatus[]
        }
      }
    }
    : {};

  const policies = await prisma.policy.findMany({
    where: {
      ...searchIs,
      ...policyStatusIs
    },
    select: {
      id: true,
      provider: true,
      insuranceType: true,
      status: true,
      startDate: true,
      endDate: true,
      customer: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          dateOfBirth: true
        }
      }
    }
  })

  res.json(policies);
})

app.get('/', (req, res) => {
  res.send('Server is up and running 🚀')
})

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});

