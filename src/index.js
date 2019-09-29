import React, { Component } from 'react';

import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import X from '../src/components/X';
import O from '../src/components/O';

export default class jogodavelha extends Component {
  
    constructor(props){
      super(props);
      this.state ={
        vez: 'x',
        a1: '',  
        a2: '',  
        a3: '',  
        b1: '',  
        b2: '',  
        b3: '',  
        c1: '',  
        c2: '',  
        c3: '',
        vencedor: ''  
      };
      this.click = this.click.bind(this);
      this.restart = this.restart.bind(this);
    }

    click(s){
        let state = this.state;
        if (eval('state.'+s) == '') {
            eval('state.'+s+' = state.vez');
            state.vez == 'x' ? state.vez = 'o' : state.vez = 'x'; 
        }
        
        if ((state.a1 == 'x' && state.b1 == 'x' && state.c1 == 'x') ||
            (state.a2 == 'x' && state.b2 == 'x' && state.c2 == 'x') || 
            (state.a3 == 'x' && state.b3 == 'x' && state.c3 == 'x') ||
            (state.a1 == 'x' && state.a2 == 'x' && state.a3 == 'x') ||
            (state.b1 == 'x' && state.b2 == 'x' && state.b3 == 'x') ||
            (state.c1 == 'x' && state.c2 == 'x' && state.c3 == 'x') || 
            (state.a1 == 'x' && state.b2 == 'x' && state.c3 == 'x') ||
            (state.a3 == 'x' && state.b2 == 'x' && state.c1 == 'x')){
              state.vencedor = 'X';
        }
        if ((state.a1 == 'o' && state.b1 == 'o' && state.c1 == 'o') ||
            (state.a2 == 'o' && state.b2 == 'o' && state.c2 == 'o') || 
            (state.a3 == 'o' && state.b3 == 'o' && state.c3 == 'o') ||
            (state.a1 == 'o' && state.a2 == 'o' && state.a3 == 'o') ||
            (state.b1 == 'o' && state.b2 == 'o' && state.b3 == 'o') ||
            (state.c1 == 'o' && state.c2 == 'o' && state.c3 == 'o') || 
            (state.a1 == 'o' && state.b2 == 'o' && state.c3 == 'o') ||
            (state.a3 == 'o' && state.b2 == 'o' && state.c1 == 'o')){
              state.vencedor = 'O';
        }

        this.setState(state);
    }

    restart(){
      let state = this.state;
      state.vez = 'x';
      state.a1 = '';
      state.a2 = '';
      state.a3 = '';
      state.b1 = '';
      state.b2 = '';
      state.b3 = '';
      state.c1 = '';
      state.c2 = '';
      state.c3 = '';
      state.vencedor = '';

      this.setState(state);
    }

    render() {
      return (

        <View style={styles.container}>
          <StatusBar hidden={true} />

          <View style={styles.content}>
              <View style={[styles.rowVertical, {borderLeftWidth: 0}]}>
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('a1')}} style={[styles.rowHorizontal, {borderTopWidth: 0}]}>
                      <View>
                          {this.state.a1 == 'x' && <X/>}
                          {this.state.a1 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>                
                  
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('a2')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.a2 == 'x' && <X/>}
                          {this.state.a2 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>        
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('a3')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.a3 == 'x' && <X/>}
                          {this.state.a3 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>        
              </View>
              <View style={styles.rowVertical}>
              <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('b1')}} style={[styles.rowHorizontal, {borderTopWidth: 0}]}>
                      <View>
                          {this.state.b1 == 'x' && <X/>}
                          {this.state.b1 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>                
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('b2')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.b2 == 'x' && <X/>}
                          {this.state.b2 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>        
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('b3')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.b3 == 'x' && <X/>}
                          {this.state.b3 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>
              </View>
              <View style={styles.rowVertical}>
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('c1')}} style={[styles.rowHorizontal, {borderTopWidth: 0}]}>
                      <View>
                          {this.state.c1 == 'x' && <X/>}
                          {this.state.c1 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>                
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('c2')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.c2 == 'x' && <X/>}
                          {this.state.c2 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>        
                  <TouchableOpacity underlayColor='#eee' onPress={()=> {this.click('c3')}} style={styles.rowHorizontal}>
                      <View>
                          {this.state.c3 == 'x' && <X/>}
                          {this.state.c3 == 'o' && <O/>}
                      </View>    
                  </TouchableOpacity>
              </View>
          </View> 

          <View style={styles.areaContainer}>
            <View style={styles.areaContent}>
              <Text>Vez de:</Text>
              {this.state.vez == 'x' && <X/>}
              {this.state.vez == 'o' && <O/>}
            </View>
            <View style={styles.containerVencedor}> 
              { (this.state.vencedor != '') &&  <Text style={styles.textVencedor}>{this.state.vencedor+" venceu!"} </Text> }
            </View>

            <TouchableOpacity onPress={this.restart}>
              <View>
                <Text>Reiniciar o jogo</Text>
              </View>
            </TouchableOpacity>
          </View>
        
          
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingTop: 80
  },
  content:{
    flexDirection: 'row',
    height: 300,
    width: 300,
  },
  rowVertical:{
    flex:1,
    borderColor: '#000',
    borderLeftWidth: 5
  },
  rowHorizontal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 5,
    borderTopColor: '#000'
  },
  areaContainer:{
    flexDirection: 'row',
    backgroundColor: '#ddd',
    justifyContent: 'space-around',
    width: 300,
    height: 100,
    marginTop: 100,
    padding: 10
  },
  areaContent:{
    
  },
  fieldVezDe:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
    width: 60,
    height: 60
  },
  containerVencedor:{
    justifyContent: 'flex-end',
  },
  textVencedor:{
    left: 18,
    fontSize: 20,
    fontWeight: 'bold'
  }
})