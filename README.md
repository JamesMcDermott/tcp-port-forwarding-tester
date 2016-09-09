# tcp-port-forwarding-tester

<strong>Environment </strong>

TCP Port Forwarding Tester is written in an Electron environment, utilising HTML, CSS, Javascript and node.js.

<strong>Overview </strong>

TCP Port Forwarding Tester is a small application that can help determine if port forwarding rules configured for TCP ports are correctly configured, and whether the destination network is going to receive the traffic.

<strong>How it works </strong> 

You will need two instances of this application - one at the source network and one at the destination network. The source network will send a message to the destination network. If the destination network has port forwarding (and ACLs, NATs) correctly configured, then the application in the destination network will receive the message.

<strong>Example Scenario</strong>

You are told by the destination network's engineer that he has configured port forwarding on TCP port 2000 to forward
  traffic to internal IP 192.168.1.50. The public IP associated with this network is 50.50.50.50. 

<em>Destination network:</em>
Configure computer with a static internal IP address of 192.168.1.50 (ensure no other devices have this IP).
While testing, turn off the computer's local firewall. On the same computer, open this application. Select 'Receive Traffic'.
Enter 2000 as the Source Port and 192.168.1.50 as the Source IP. Click 'Start Server'. If you receive a message from the application in the source network, then the port forwarding configuration is working.

<em>Source network:</em> 
Open 'Send Traffic'. Enter 2000 as the port, 50.50.50.50 as the IP and then press send. If the message was delivered to the destination network, you will receive a receipt.
