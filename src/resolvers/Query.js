const tasks = async (parent, args, context) => {
  const allTasks = await context.prisma.todo.findMany();
  return allTasks;
};

const task = async (parent, args, context) => {
  const foundTask = await context.prisma.todo.findUnique({
    where: { id: args.id },
  });
  return foundTask;
};

export default { tasks, task };
