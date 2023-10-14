const create = async (parent, args, context, info) => {
  const task = await context.prisma.todo.create({
    data: { ...args },
  });
  return task;
};

const update = async (parent, args, context, info) => {
  const task = await context.prisma.todo.findUnique({ where: { id: args.id } });
  if (task) {
    throw new Error(`No task found with id: ${args.id}`);
  }
  const updatedTask = await context.prisma.todo.update({
    where: { id: args.id },
    data: { status: args.status },
  });
  return updatedTask;
};

const deleteTask = async (parent, args, context, info) => {
  const task = await context.prisma.todo.findUnique({ where: { id: args.id } });
  if (task) {
    throw new Error(`No task found with id: ${args.id}`);
  }
  const deletedTask = await context.prisma.todo.delete({
    where: { id: args.id },
  });
  return deletedTask;
};

export default { create, update, deleteTask };
