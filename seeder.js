import prisma from './prisma/client.js'

const destroyData = async () => {
  try {
    await prisma.quote.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

console.log('process.argv[2]: ', process.argv[2])

if (process.argv[2] === '-d') {
  destroyData();
}