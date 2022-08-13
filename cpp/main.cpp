#include <bits/stdc++.h>
using namespace std;

string randomize(string s){
  string res = "";
	for (int i = 0; i < s.length(); i++)
		res = res + s[rand() % s.length()];
	return res;
}

string makePassword(int length,int isCap , int isSmall ,int isNum, int isSpecial){
  string caps = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
  string small = "abcdefghijklmnopqrstuvwxyz";
  string nums = "1234567890";
  string special = "!@#$%^&*()-+";
  string input = "";
  if(isCap == 1){
    // caps = randomize(caps);
    input += caps;
  } 
  if(isNum == 1){
    // nums = randomize(nums);
    input += nums;
  } 
  if(isSpecial == 1){
    // special = randomize(special);
    input += special;
  }
  if(isSmall == 1){
    // special = randomize(special);
    input += small;
  } 
  input = randomize(input);
  string password = "";
  if(length > input.length()){
    return "ERROR!!!";
  }
  for(int i = 0; i < length; i++){
    password = password + input[rand() % length];
  }

  return password;
}

void addToLogs(string password){
  fstream f;
  ofstream fout;
  ifstream fin;
  fin.open("logs.txt");
  fout.open ("logs.txt",ios::app);
  if(fin.is_open()){
    fout << password;
    fout << "\n";
    // cout << "data logged: " << password << endl;
    fin.close();
    fout.close();
  }
}

void printLogs(){
  fstream f;
  ofstream fout;
  ifstream fin;
  fin.open("logs.txt");
  fout.open ("logs.txt",ios::app);
  if(fin.is_open()){
    string res;
    f.open("logs.txt");
    while (f >> res) {
        cout << res << endl;
    }

  }
}



int main(){
  srand(time(NULL));
  cout << "Random Password Generator" << endl;
  cout << "Enter the desired length" << endl;
  int length;cin >> length;

  cout << "Enter 1 if you want capitals" << endl;
  int isCap; cin >> isCap;

  cout << "Enter 1 if you want small alphabets" << endl;
  int isSmall; cin >> isSmall;
  
  cout << "Enter 1 if you want numbers" << endl;
  int isNum; cin >> isNum;
  
  cout << "Enter 1 if you want special characters" << endl;
  int isSpecial; cin >> isSpecial;
  
  string result = makePassword(length, isCap, isSmall, isNum , isSpecial);
  cout << result << endl;
  addToLogs(result);
  // printLogs();
  return 0;
}