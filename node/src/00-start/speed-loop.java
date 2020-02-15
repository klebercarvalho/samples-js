// Program to calculate execution time or elapsed time in Java
class speed-loop
{
	public static void main(String[] args) throws InterruptedException {

		long startTime = System.currentTimeMillis();

		int cycles = 1000000000;
		
		for (int i = 0; i < cycles; i++) {
		}

		long endTime = System.currentTimeMillis();

		long timeElapsed = endTime - startTime;

		System.out.println(String.format("Java looped %d times in %d seconds " cycles, timeElapsed));
	}
}