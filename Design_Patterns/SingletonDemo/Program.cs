using System;

namespace SingletonDemo
{
	class Program
	{
		static void Main(string[] args)
		{
			Singleton obj1 = Singleton.GetInstance();
			Singleton obj2 = Singleton.GetInstance();

			if (obj1.Equals(obj2))
			{
				Console.WriteLine("Both objects are equal");
			}
			else {
				Console.WriteLine("Both objects are not equal");
			}
			Console.ReadLine();
		}
	}
}
