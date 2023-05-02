import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

interface propTypes {
    title: string
}

const CommonButton = ({ title }: propTypes) => {
  return (
    <TouchableOpacity>
        <Text>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({})