// order by test generator
export const TestOrderByGenerator = <
  T extends { id: number; num: number },
  U extends { id: number }
>(
  data: T[],
  result: U[],
  type?: string
): boolean => {
  for (let i = 0; i < result.length - 1; i++) {
    const current = data.find((data) => data.id === result[i].id);
    const next = data.find((data) => data.id === result[i + 1].id);

    expect(current).toBeDefined();
    expect(next).toBeDefined();
    // default: num desc만 진행
    expect(current!.num).toBeGreaterThanOrEqual(next!.num);

    // num_id: num desc, id desc
    if (type === "num_id")
      if (current!.num === next!.num)
        expect(current!.id).toBeGreaterThan(next!.id);
  }

  return true;
};
