using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SingletonDemo
{
	class Singleton
	{
		static Singleton obj = null;
		private Singleton()
		{
			
		}

		public static Singleton GetInstance()
		{
			if (null == obj)
			{
				obj = new Singleton();
			}
			return obj;
		}
	}
}
