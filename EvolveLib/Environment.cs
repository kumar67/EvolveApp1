﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Sockets;

namespace EvolveLib
{
    public class Enron
    {
        public Enron()
        {
        }
        public void Run()
        {
            TcpClient tcpClient = new TcpClient();
            tcpClient.Connect("127.0.0.1", 8000);
            NetworkStream clientStream = tcpClient.GetStream();
            byte[] data = new byte[4096];
            int bytesRead = 0;
            try
            {
                bytesRead = clientStream.Read(data, 0, 4096);
                ASCIIEncoding encoder = new ASCIIEncoding();
                Console.WriteLine(encoder.GetString(data, 0, bytesRead));
            }
            catch (Exception ex)
            {
                //Process the error, write to logs, etc. 
            }
            finally
            {
                tcpClient.Close();
            }
            Console.WriteLine("End.");
        }
    }
}
