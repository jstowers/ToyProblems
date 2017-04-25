// Yapstone Coding Challenge
// Monday, April 24, 2017

// Staircase:  HackerRank test problem

/*
	Description:

	Given an integer N as the height of the staircase, print the staircase
	like this:

	Input:

		 N = 6 

	Output:
	
		     #
		    ##
		   ###
		  ####
		 #####
		######

*/

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {
    
    static void StairCase(int n) {

    	for (int i = 1; i <= n; i++) {

       		String blanks = String.join("",Collections.nCopies(n-i," "));
            String hashMarks = String.join("", Collections.nCopies(i,"#"));
            System.out.println(blanks + hashMarks);
        }
    }

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);
        int _n;
        _n = Integer.parseInt(in.nextLine().trim());
        
        StairCase(_n);
    }
}