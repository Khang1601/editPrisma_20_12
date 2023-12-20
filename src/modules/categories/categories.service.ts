import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from '../prisma/prisma.service';
import { AvailableStatus } from '@prisma/client';

@Injectable()
export class CategoriesService {

  constructor(private prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto) {

    try {
      let category = await this.prisma.categories.create({
        data: {
          ...createCategoryDto,
          createAt: String(Date.now()),
          updateAt: String(Date.now()),
        }
  
      })
      return category

    } catch (error) {
      return error

    }
    
    // return 'This action adds a new categories';
  }

  async findAll() {

    try {
      let categories = await this.prisma.categories.findMany()
      return {
        data: categories
      }
    } catch (error) {
      // console.log("error",error);
      return {
        error
      }
      
    }


    // return `This action returns all categories`;

  }

  async findOne(id: number) {

    try {
      let category = await this.prisma.categories.findUnique({
        where: {
          id: Number(id)
        }
      })
  
      return category 

    } catch (error) {
      return error
      
    }

    

    // return `This action returns a #${id} category`;
  }

  async findActive(activeUser: String){
    try {
      let category = await this.prisma.categories.findMany({
        where: {
          status: activeUser == 'active' ? AvailableStatus.active : AvailableStatus.inactive
        } 
      })
      
      return {
        data: category
      }
      
    } catch (error) {
      return error
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      let category = await this.prisma.categories.update({
        where: {
          id: Number(id)
        },
        data: updateCategoryDto
      })
      return category;

    } catch (error) {
      return error
    }

    // return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    try {
      let category = await this.prisma.categories.delete({
        where: {
          id
        }
      })
      // console.log("category",category);
      return category
    } catch (error) {
      // console.log("err se",error);
      return error
    }


    // return `This action remove a #${id} category`;
  }
}
