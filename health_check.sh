#!/bin/bash

echo "================================="
echo "StockAlert Server Health Check"
echo "================================="

echo ""
echo "Current Date & Time:"
date

echo ""
echo "Disk Usage:"
df -h

echo ""
echo "Memory Usage:"
free -m

echo ""
echo "CPU Load:"
uptime

echo ""
echo "Top Running Processes:"
ps aux | head

echo ""
echo "Health Check Completed"